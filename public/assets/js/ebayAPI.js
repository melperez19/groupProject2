$(".btn").on("click", function () {
    $("#search-appears-here").empty();
    var SearchTerm = $('#ebaySearchTerm').val();
    $.getJSON("/jsonTest?q=" + SearchTerm, function (data) {
        console.log(data);
        var ebayRecord = data.findItemsAdvancedResponse;
        var searchResult = ebayRecord[0].searchResult[0].item;
        if (searchResult === 'undefined' || searchResult === 0) {
            $(`
            <h3>Sorry, no results under that search term.</h3>
            `).appendTo("#search-appears-here");
        } else {
            searchResult.forEach(function (item) {

                var itemId = item.itemId;
                var title = item.title;
                var category = item.primaryCategory[0].categoryName;
                var price = item.sellingStatus[0].currentPrice[0]["__value__"];
                var condition = item.condition[0].conditionDisplayName[0];
                var image = item.galleryURL;
                var viewItem = item.viewItemURL;
                var searchResult = $(`
                        <h5><div>Id: ${itemId}</div>
                        <div>Title: ${title}</div>
                        <div>Category Name: ${category}</div>
                        <div>Price: $${price}</div>
                        <div>Condition: ${condition}</div>
                        <img src="${image}"/>
                        <a href="${viewItem}" target="_blank">Follow the link to proceed with purchase.
                        </a>
                        </h5>
                        <hr>
                        <hr>

                        `);
                searchResult.appendTo("#search-appears-here");

            })
        }
    });

})
