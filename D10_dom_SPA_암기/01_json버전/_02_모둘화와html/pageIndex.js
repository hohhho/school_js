export let PageIndex = {

    execute() {
        let $content =
        document.querySelector("#content");

        let tag = "";

        tag += 
        `
        <h1>이곳은 main페이지 입니다.</h1>
        `;

        $content.innerHTML = tag;

    }

}