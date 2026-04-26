import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const outputDirectory = join(process.cwd(), 'out')

function htmlFiles(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry)
    const stat = statSync(path)

    if (stat.isDirectory()) return htmlFiles(path)
    if (entry.endsWith('.html')) return [path]
    return []
  })
}

for (const file of htmlFiles(outputDirectory)) {
  const html = readFileSync(file, 'utf8')
  // Add defer to Next's noModule polyfill so the exported head has no
  // render-blocking script for SEO audits.
  const updated = html.replace(
    /<script\b((?=[^>]*\bnoModule\b)(?![^>]*\b(?:async|defer|type=["']module["']))[^>]*)><\/script>/gi,
    '<script$1 defer></script>',
  )

  if (updated !== html) {
    writeFileSync(file, updated)
  }
}
