function addClass(course, credits) {
    var node = createChild(course, credits);
    var container = document.getElementById("classesHolder");
    container.appendChild(node);
}

function createChild(course, credits) {
    const outterDiv = document.createElement("div");
    outterDiv.classList.add("row");

    const button = document.createElement("button")
    button.classList.add('btn', 'btn-danger', 'btn-sm');
    button.innerHTML = "-";
    button.addEventListener("click", function () {
        document.getElementById("classesHolder").removeChild(outterDiv);
    });
    outterDiv.appendChild(button);

    const innerDiv1 = document.createElement("div");
    innerDiv1.classList.add('col-sm', 'Course', 'text-left');
    innerDiv1.innerHTML = course;

    const innerDiv2 = document.createElement("div")
    innerDiv2.classList.add('col-sm', 'ClassCredits');
    innerDiv2.innerHTML = credits;

    outterDiv.appendChild(innerDiv1);
    outterDiv.appendChild(innerDiv2);
    return outterDiv;
}