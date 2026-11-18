

function post() {
    var title = document.getElementById("title");
    var description = document.getElementById("desc");
    var postContainer = document.getElementById("postContainer");

    // console.log(title, description);
    if (title.value.trim() || description.value.trim()) {
        postContainer.innerHTML += `    <div class="card mt-2">
                    <div class="card-header bgColor text-light">
                        @blog
                    </div>
                    <div class="card-body">
                        <figure>
                            <blockquote class="blockquote">
                                <p>${title.value}</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                <em>${description.value}</em>
                            </figcaption>
                        </figure>
                        
                    </div>
                    <div class="ms-auto m-2">
                        <button class="btn bgColor text-light px-4" id="editBtn" onclick="editPost()">Edit</button>
                        <button class="btn deleteBtn text-light" onclick="deletePost()">Delete</button>
                    </div>
                </div>`;

    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Title & description can't be empty",
        });
    }
    title.value = "";
    description.value = "";

}

function deletePost() {
    var postContainer = event.target.parentNode.parentNode
    // console.log(postContainer)
    postContainer.remove()

}

function editPost() {
    var postContainer = event.target.parentNode.parentNode
    var currentTitle = postContainer.querySelector("p").innerText;
    var currentDesc = postContainer.querySelector("em").innerText;
    console.log(currentTitle, currentDesc)
    // console.log(postContainer)
    postContainer.innerHTML = `    <div class="card">
          <!-- Content for the first column -->
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Title</label>
            <input type="text" id="title" class="form-control" placeholder="Enter your Title here:">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
            <textarea class="form-control" id="desc" rows="3" placeholder="What's On your mind..."></textarea>
          </div>
          
        </div>
                    <div class="ms-auto m-2">
                    
                        <button class="btn text-light bgColor" onclick="savePost()">Save</button>
                        <button class="btn deleteBtn text-light" onclick="deletePost()">Delete</button>
                    </div>
                </div>`;

}

function savePost() {
    var card = event.target.parentNode.parentNode;
    var title = document.getElementById("title");
    var description = document.getElementById("desc");
    // var postContainer = document.getElementById("postContainer");

    // console.log(title, description);
    if (title.value.trim() || description.value.trim()) {
        card.innerHTML = `    <div class="card mt-2">
                    <div class="card-header bgColor text-light">
                        @blog
                    </div>
                    <div class="card-body">
                        <figure>
                            <blockquote class="blockquote">
                                <p>${title.value}</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                <em>${description.value}</em>
                            </figcaption>
                        </figure>
                        
                    </div>
                    <div class="ms-auto m-2">
                        <button class="btn bgColor text-light px-4" id="editBtn" onclick="editPost()">Edit</button>
                        <button class="btn deleteBtn text-light" onclick="deletePost()">Delete</button>
                    </div>
                </div>`;

    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Title & description can't be empty",
        });
    }
}

