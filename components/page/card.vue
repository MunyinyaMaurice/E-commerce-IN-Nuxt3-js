<template>
    <div class='grid md:grid-cols-3 gap-x-5 gap-y-4 mb-6 grid-flow-row-dense'>
        <div class="bg-auto bg-cover bg-[url('~/assets/images/visit.jpeg')] rounded-lg min-h-[250px]" />
    <div class="bg-auto bg-cover rounded-lg min-h-[250px] row-span-2 flex relative">
        <img src="~/assets/images/visit.jpeg" alt="Card background" style="width: 100%; height: 100%; object-fit: cover; object-position: center;" class="card-background">
        <div class="absolute top-0 left-0 right-0 px-3 py-2">
            <button type="button" class="text-white bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-sm px-2 py-1 text-center white:bg-orange-600 dark:hover:bg-orange-200 dark:focus:ring-orange-500">Deal from 5$</button>
        </div>
        <div class="absolute bottom-0 left-0 right-0 px-3 py-2 text-left text-white text-lg font-bold underline">
            
        </div>
        
        <div class="absolute bottom-0 left-0 right-0 px-3 py-2 text-white text-sm">
            <div class="product-details" style="text-align: left; color: #ffffff; text-transform: bold; text-transform: underline;">
                <div class="underline font-bold text-white tex-align: left"> Product Name</div>
                <div class="product-description">Product details go here...</div>
                <div class="btn btn-success"> 40 Listings</div>
            </div>
        </div>
    </div>

        <div class="bg-auto bg-cover bg-[url('~/assets/images/visit1.jpeg')] rounded-lg min-h-[250px]" />
        <div
            class="bg-auto sm:bg-cover md:bg-contain lg:bg-auto xl:bg-cover bg-[url('~/assets/images/visit2.jpeg')] rounded-lg min-h-[250px]">
            <div>
                <button type="button"
                    class="text-white bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-sm px-4 py-2 text-center white:bg-orange-600 dark:hover:bg-orange-200 dark:focus:ring-orange-500">Become
                    a vendor</button>
            </div>
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>

            <p class="text-gray-700 text-base text-white">
                <b><u> Rubavu - Kivu</u></b>
            </p>
        </div>

        <div class='grid md:grid-cols-2 gap-x-2 gap-y-3 grid-flow-row-dense'>
            <div class="bg-auto bg-cover bg-[url('~/assets/images/visit1.jpeg')] rounded-lg min-h-[250px]" />
            <div class="bg-auto bg-cover bg-[url('~/assets/images/visit5.jpg')] rounded-lg min-h-[250px]" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bttm {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

</style>
