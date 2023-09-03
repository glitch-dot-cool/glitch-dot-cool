import { truncateString } from "./string"

export const deriveDescriptionFromMarkdown = markdown => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(markdown, "text/html")
  const walker = document.createTreeWalker(doc, NodeFilter.SHOW_TEXT)

  const textList = []
  let currentNode = walker.currentNode

  while (currentNode) {
    const { textContent } = currentNode
    if (textContent && textContent !== "\n") {
      textList.push(currentNode.textContent)
    }
    currentNode = walker.nextNode()
  }

  const str = textList.reduce((acc, cur) => (acc += formatLineBreaks(cur)), "")

  return truncateString(str, 160)
}

const formatLineBreaks = str => {
  // remove newline characters, then replace incidental double-periods w/ ". "
  return str.replaceAll("\n", ".").replaceAll("..", ". ")
}
