
function mdzg(layout_html, page_md) {
    window.addEventListener("load", async (event) => {
        const layout = await fetch(layout_html)
        const html = await layout.text()
        document.getElementById("page").outerHTML = html

        const page = await fetch(page_md)
        const md = await page.text()
        document.getElementById("content").innerHTML = marked.parse(md)
    })
}