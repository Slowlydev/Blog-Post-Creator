function format() {
    const id = document.querySelector("#id").value
    const title = document.querySelector("#title").value
    const date = document.querySelector("#date").value
    const description = document.querySelector("#description").value
    const text = document.querySelector("#text").value

    const formated_json = '{ "id": "' + id + '", "title": "' + title + '", "date": "' + date + '", "description":"' + description + '", "text": "' + text + '" }'

    document.getElementById("oneline").innerHTML = formated_json;

    document.getElementById("line_col1").innerHTML = '{';
    document.getElementById("line_id").innerHTML = '\xa0\xa0\xa0\xa0"id": "' + id + '",';
    document.getElementById("line_title").innerHTML = '\xa0\xa0\xa0\xa0"title": "' + title + '",';
    document.getElementById("line_date").innerHTML = '\xa0\xa0\xa0\xa0"date": "' + date + '",';
    document.getElementById("line_description").innerHTML = '\xa0\xa0\xa0\xa0"description": "' + description + '",';
    document.getElementById("line_text").innerHTML = '\xa0\xa0\xa0\xa0"text": "' + text + '"';
    document.getElementById("line_col2").innerHTML = '}';
}