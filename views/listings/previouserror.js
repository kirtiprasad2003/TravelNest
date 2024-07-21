<% layout('layouts/boilerplate') %>
<div class="row mt-3">
    <div class="col-8 offset-3">
        <h3><%= listing.title %></h3>
    </div>
    <div class="card col-6 offset-3 show-card listings-card">
            <img src="<%= listing.image %>" class="card-img-top show-img" alt="listing_image">
            <div class="card-body">
                <p class="card-text">
                    <%= listing.description %> <br>
                    &#8377; <%= listing.price.toLocaleString("en-IN") %> <br>
                    <%= listing.location %> <br>
                    <%= listing.country %>
                </p>
            </div>  
    </div>
    <br>
    <div class="btns mb-3">
        <a href="/listings/<%= listing._id %>/edit" class="btn btn-dark col-1 offset-3 edit-btn">Edit</a>
        <form method="POST" action="/listings/<%= listing._id %>?_method=DELETE">
            <button type="submit" class="btn btn-dark offset-5">Delete</button>
        </form>
    </div>
    <div class="col-8 offset-3 mb-3">
        <hr>
        <h4>Leave a Review</h4>
        <form action="/listings/<%= listing._id %>/reviews" method="post" novalidate class="needs-validation">
            <div class="mt-3 mb-3">
                <label for="rating" class="form-label">Rating</label>
                <input type="range" name="review[rating]" id="rating" min="1" max="5" class="form-range">
            </div>
            <div class="mt-3 mb-3">
                <label for="comment" class="form-label">Comments</label>
                <textarea name="review[comment]" id="comment" cols="30" rows="5" class="form-control" required></textarea>
                <div class="invalid-feedback">Please add some comments for review</div>
            </div>
            <button class="btn btn-outline-dark">Submit</button>
        </form>
        <hr>

        <p><b>All Reviews</b></p>
        <div class="row">
        <% for(review of listing.reviews) {%>
            <div class="card col-5 ms-3 mb-3">
            <div class="card-body">
                <h5 class="card-title">Kirti Prasad</h5>
                <p class="card-text"><%=review.comment%></p>
                <p class="card-text"><%=review.rating%> stars</p>
                <form class="mb-3" method="post" action="/listings/<%=listing._id%>/reviews/<%=review._id%> ?_method=DELETE">

                    <button class="btn btn-sm btn-dark">Delete</button>
                </form>
                </div>
            </div>
            <%}%>
        </div>
    </div>
</div>
