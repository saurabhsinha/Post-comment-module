Template.postsList.helpers({
    postss: function () {
        return Posts.find({}, {
            sort: {
                submitted: -1
            }
        });
    }
});