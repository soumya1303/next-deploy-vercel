const blogList = [
    {
        slug:"munich-oktober-fest",
        title:"Oktoberfest in Munich",
        excerpt:"Germany’s most iconic Volkfest, Oktoberfest attracts millions of people to the city to enjoy Bavarian beer and food, live bands, and parades",
        description:"Germany’s most iconic Volkfest, Oktoberfest attracts millions of people to the city to enjoy Bavarian beer and food, live bands, and parades. This 3-week-long festivity kicks off with a vibrant parade of carriages, floats, and people in traditional costumes, before congregating at the Theresienwiese fairground. You can find hundreds of large tents with gallons of beers provided by renowned Munich breweries, with traditional Bavarian music blaring out of massive speakers throughout the day. Fairground rides such as Ferris wheels, miniature trains, and merry-go-rounds offer hours of fun for visitors too young to drink.",
        imgURL:"https://a.cdn-hotels.com/gdcs/production47/d235/86a2e8ed-55ac-4e9a-b0cf-ba39bc216e1b.jpg",
        location:"Theresienwiese, Bavariaring, 80336 München, Germany",
        date:"2021-05-12",
        isFeatured:false
    },{
        slug:"reeperbahn-festival-humburg",
        title:"Reeperbahn Festival in Hamburg",
        excerpt:"Hamburg’s Reeperbahn Festival gives music fans a chance to enjoy a variety of genres and up-and-coming artists from across the world",
        description:"Hamburg’s Reeperbahn Festival gives music fans a chance to enjoy a variety of genres and up-and-coming artists from across the world. Over the course of 4 days in September, there are over 350 music concerts, art exhibitions, conferences, and film screenings held in and around St. Pauli district. Venues range from underground clubs and bars to grand buildings such as Imperial Theatre, Schulmuseum and St. Pauli Cathedral.",
        imgURL:"https://a.cdn-hotels.com/gdcs/production156/d1985/7e19b0da-c954-4fcf-bd5a-91f7da2dde07.jpg",
        location:"Reeperbahn, St. Pauli, Hamburg, Germany",
        date:"2021-09-23",
        isFeatured:true
    },{
        slug:"cologne-karneval",
        title:"Karneval in Cologne",
        excerpt:"Karneval in Cologne feels like a massive costume party that lasts for about 6 days in the month of February, from Thursday to Tuesday",
        description:"Karneval in Cologne feels like a massive costume party that lasts for about 6 days in the month of February, from Thursday to Tuesday. The 1st day kicks off with a lively street parade in the morning, with crowds dressed up in wacky costumes and loud music blaring from just about every pub and brewery in the city. Expect lots of traditional music, dance and live performances during the day, followed with more parties and street shows well into the night.",
        imgURL:"https://a.cdn-hotels.com/gdcs/production46/d1888/e809a377-8d03-4e3c-8917-d98bc2ea36a9.jpg",
        location:"Heumarkt, Cologne, Germany",
        date:"2021-11-29",
        isFeatured:true
    },
    {
        slug:"cannstatter-volksfest-stuttgart",
        title:"Cannstatter Volksfest in Stuttgart",
        excerpt:"Cannstatter Volksfest kicks off with a spectacular street parade, with horse-drawn brewery wagons, locals dressed in traditional costumes, and marching bands",
        description:"Cannstatter Volksfest kicks off with a spectacular street parade, with horse-drawn brewery wagons, locals dressed in traditional costumes, and marching bands. Similar to Oktoberfest, this family-friendly festival lasts for about 3 weeks, starting from late-September.",
        imgURL:"https://a.cdn-hotels.com/gdcs/production63/d805/14c3d450-68ce-11e8-9862-0242ac11003c.jpg",
        location:"Cannstatter Wasen Stuttgart, Mercedesstraße, 70372 Stuttgart, Germany",
        date:"2022-03-13",
        isFeatured:false
    },
    {
        slug:"wurstmarkt-bad-durkheim",
        title:"Wurstmarkt in Bad Dürkheim",
        excerpt:"Every 1st and 3rd weekend of September, Wurstmarkt sees over 500,000 people celebrating 2 of Germany’s most popular exports – wine and wurst (sausage)",
        description:"Every 1st and 3rd weekend of September, Wurstmarkt sees over 500,000 people celebrating 2 of Germany’s most popular exports – wine and wurst (sausage). This folk festival dates back to the 12th century, when farmers and wineries of Bad Dürkheim sold their produce for pilgrims heading up to Michaelskapelle.",
        imgURL:"https://a.cdn-hotels.com/gdcs/production95/d701/1549f440-68ce-11e8-8a0f-0242ac11000c.jpg",
        location:"Brühlwiesen, 67098 Bad Dürkheim, Germany",
        date:"2022-07-09",
        isFeatured:true
    },
    {
        slug:"berlinale-film-festival",
        title:"Berlinale Film Festival",
        excerpt:"A festival for dedicated cinephiles, Berlinale showcases over 400 films of various genres and lengths",
        description:"A festival for dedicated cinephiles, Berlinale showcases over 400 films of various genres and lengths. One of the largest international film festivals in the world, it has been held in Berlin since 1978.",
        imgURL:"https://a.cdn-hotels.com/gdcs/production35/d716/29fb3272-cb9c-470d-9e9c-49eeb9b6d036.jpg",
        location:"EFM, Potsdamer Straße 5, 10785 Berlin, Germany",
        date:"2022-12-11",
        isFeatured:false
    },
    {
        slug:"weihnachtsmarkt",
        title:"Weihnachtsmarkt",
        excerpt:"If you’re in Berlin during wintertime, you can find not 1, but more than 20 Weihnachtsmarkts (Christmas markets) set up in historical buildings and city squares",
        description:"If you’re in Berlin during wintertime, you can find not 1, but more than 20 Weihnachtsmarkts (Christmas markets) set up in historical buildings and city squares. About a month before Christmas, crowds of locals and tourists brave the cold to enjoy a variety of activities and seasonal specialities at these vibrant markets.",
        imgURL:"https://a.cdn-hotels.com/gdcs/production190/d1188/15dae9a0-68ce-11e8-99fe-0242ac11000d.jpg",
        location:"Gendarmenmarkt, 10117 Berlin, Germany",
        date:"2022-12-24",
        isFeatured:false
    },
    {
        slug:"rhein-flammen-koblenz",
        title:"Rhein in Flammen in Koblenz",
        excerpt:"Rhein in Flammen (Rhine in Flames) is a series of spectacular firework displays and ship parades on the banks of Rhine",
        description:"Rhein in Flammen (Rhine in Flames) is a series of spectacular firework displays and ship parades on the banks of Rhine. The festival takes place from May to September every year, with about 75 illuminated ships sailing down the Rhine. In the evening, expect spectacular fireworks displays and spectators enjoying the view from dry land.",
        imgURL:"https://a.cdn-hotels.com/gdcs/production87/d1772/a01c5c14-7b74-42a6-a779-2ca801668b15.jpg",
        location:"Ehrenbreitstein Fortress, 56077 Koblenz, Germany",
        date:"2023-09-10",
        isFeatured:false
    },
];

const getFeaturedBlogs = ()=>{
    return blogList.filter((e)=>{
        return e.isFeatured
    })
}

const getBlogBySlug = (slug)=>{
    return blogList.find((e) => {
        if (e.slug === slug){
            return e;
        }
    })
}

const getAllBlogs = ()=>{
    return blogList;
}

const getFilteredBlogs = (args)=>{

    const {year, month} = args;

    const filteredBlogs = blogList.filter((blog)=>{
        const blogDate = new Date(blog.date);
        if (blogDate.getFullYear()===Number(year) && blogDate.getMonth()=== (Number(month)-1)){
            return blog
        }
    });
    return filteredBlogs;
}


export default blogList;

export {getAllBlogs, getFeaturedBlogs, getBlogBySlug, getFilteredBlogs};