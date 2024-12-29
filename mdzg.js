function mdzg() {
    window.addEventListener("load", async (event) => {
        const metaList = document.getElementsByTagName("meta")

        for (const meta of metaList) {
            const property = meta.getAttribute("property")
            if (property != null) {
                if (property == "mdzg:markdown") {
                    var page_md = meta.getAttribute("content")
                } else if (property == "mdzg:layout") {
                    var layout_html = meta.getAttribute("content")
                }
            }
        }

        const layout = await fetch(layout_html)
        const html = await layout.text()
        document.getElementById("page").outerHTML = html

        const page = await fetch(page_md)
        const md = await page.text()
        document.getElementById("content").innerHTML = marked.parse(md)
    })
}