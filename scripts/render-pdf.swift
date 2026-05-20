import AppKit
import Foundation
import PDFKit

guard CommandLine.arguments.count >= 3 else {
  fputs("Usage: render-pdf.swift input.pdf output-directory [scale]\n", stderr)
  exit(1)
}

let inputURL = URL(fileURLWithPath: CommandLine.arguments[1])
let outputURL = URL(fileURLWithPath: CommandLine.arguments[2], isDirectory: true)
let scale = CommandLine.arguments.count >= 4 ? CGFloat(Double(CommandLine.arguments[3]) ?? 2.0) : 2.0

guard let document = PDFDocument(url: inputURL) else {
  fputs("Could not open PDF: \(inputURL.path)\n", stderr)
  exit(1)
}

try FileManager.default.createDirectory(at: outputURL, withIntermediateDirectories: true)

let colorSpace = CGColorSpaceCreateDeviceRGB()

for pageIndex in 0..<document.pageCount {
  guard let page = document.page(at: pageIndex) else {
    continue
  }

  let bounds = page.bounds(for: .mediaBox)
  let pixelWidth = Int((bounds.width * scale).rounded(.up))
  let pixelHeight = Int((bounds.height * scale).rounded(.up))

  guard
    let context = CGContext(
      data: nil,
      width: pixelWidth,
      height: pixelHeight,
      bitsPerComponent: 8,
      bytesPerRow: 0,
      space: colorSpace,
      bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
    )
  else {
    fputs("Could not create bitmap for page \(pageIndex + 1)\n", stderr)
    exit(1)
  }

  context.setFillColor(NSColor.white.cgColor)
  context.fill(CGRect(x: 0, y: 0, width: pixelWidth, height: pixelHeight))
  context.scaleBy(x: scale, y: scale)
  context.translateBy(x: -bounds.minX, y: -bounds.minY)
  page.draw(with: .mediaBox, to: context)

  guard let image = context.makeImage() else {
    fputs("Could not render page \(pageIndex + 1)\n", stderr)
    exit(1)
  }

  let bitmap = NSBitmapImageRep(cgImage: image)
  guard let data = bitmap.representation(using: .png, properties: [:]) else {
    fputs("Could not encode page \(pageIndex + 1)\n", stderr)
    exit(1)
  }

  let filename = String(format: "uv-testimonial-%02d.png", pageIndex + 1)
  try data.write(to: outputURL.appendingPathComponent(filename))
  print(filename)
}
