// Design
 $(document).ready(function () {
    $(".design").click(function () {
        $(".item-deign").show()
        $(".design").hide()
        $(".item-deign").click(function () {
            $(".design").show()
            $(".item-deign").hide()
        })
    })
})

//Development
$(document).ready(function () {
    $(".development").click(function () {
        $(".item-development").show()
        $(".development").hide()
        $(".item-development").click(function () {
            $(".development").show()
            $(".item-development").hide()
        })
    })
})

// Product management
$(document).ready(function () {
    $(".product").click(function () {
        $(".item-product").show()
        $(".product").hide()
        $(".item-product").click(function () {
            $(".product").show()
            $(".item-product").hide()
        })
    })
})