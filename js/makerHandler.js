AFRAME.registerCompnent("markerHandler",{
    init:async()=>{
        this.el.addEventListener("markerFound",()=>{
            this.handleMarkerFound()
        })

        this.el.addEventListener("markerLost",()=>{
            this.handleMarkerLost()
        })
        
    },

    handleMarkerFound:()=>{        
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "flex"
        var ratingButton = document.getElementById("rating-button")
        ratingButton.addEventListener("click",()=>{
            swal({
                icon:"warning",
                title:"Rate Toy",
                text:"Work in progress"
            })
        })
        var orderButton = document.getElementById("order-button")
        orderButton.addEventListener("click",()=>{
            swal({
                icon:"https://i.imgur.com/4NZ6uLY.jpg",
                title:"Thanks for Order",
                text:"Your order will be arrived soon!"
            })
        })

        var orderSummaryButton = document.getElementById("rating-button")
        orderSummaryButton.addEventListener("click",()=>{
            swal({
                icon:"warning",
                title:"Order Summary",
                text:"Work in progress"
            })
        })

    },

    handleMarkerLost:()=>{
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "none"
    }
})