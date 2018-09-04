import * as Auth from './Auth';
const API_URL = ''

export function getPlaylist() {
    return Promise.resolve([
        {
            id: 1,
            current_seconds: 1,
            subscriber: 'Leon',
            url: 'https://www.youtube.com/watch?v=t7Xt4ObtKas',
            meta: {  
                "provider_url":"https:\/\/www.youtube.com\/",
                "width":480,
                "thumbnail_height":360,
                "title":"Marina Maximilian Blumin \u0026 Red Band - Eye In The Sky",
                "html":"\u003ciframe width=\"480\" height=\"270\" src=\"https:\/\/www.youtube.com\/embed\/RAsN9OVI-vQ?feature=oembed\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen\u003e\u003c\/iframe\u003e",
                "thumbnail_url":"https:\/\/i.ytimg.com\/vi\/RAsN9OVI-vQ\/hqdefault.jpg",
                "height":270,
                "author_name":"reshettv",
                "thumbnail_width":480,
                "version":"1.0",
                "author_url":"https:\/\/www.youtube.com\/user\/reshettv",
                "provider_name":"YouTube",
                "type":"video"
            }
        },
        {
            id: 2,
            current_seconds: -1,
            subscriber: 'Itsik',
            url: 'https://www.youtube.com/watch?v=RAsN9OVI-vQ',
            meta: {  
                "html":"\u003ciframe width=\"480\" height=\"270\" src=\"https:\/\/www.youtube.com\/embed\/t7Xt4ObtKas?feature=oembed\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen\u003e\u003c\/iframe\u003e",
                "thumbnail_url":"https:\/\/i.ytimg.com\/vi\/t7Xt4ObtKas\/hqdefault.jpg",
                "thumbnail_height":360,
                "thumbnail_width":480,
                "provider_name":"YouTube",
                "author_url":"https:\/\/www.youtube.com\/user\/ShefitaANDSabbaba",
                "height":270,
                "type":"video",
                "provider_url":"https:\/\/www.youtube.com\/",
                "title":"SHEFITA - Karma Police [Radiohead Cover]",
                "width":480,
                "author_name":"Shefita",
                "version":"1.0"
             }
        },
        {
            id: 3,
            current_seconds: -1,
            subscriber: 'Yossi',
            url: 'https://www.youtube.com/watch?v=tAGnKpE4NCI',
            meta: {  
                "thumbnail_width":480,
                "type":"video",
                "height":344,
                "author_name":"MetallicaTV",
                "html":"\u003ciframe width=\"459\" height=\"344\" src=\"https:\/\/www.youtube.com\/embed\/tAGnKpE4NCI?feature=oembed\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen\u003e\u003c\/iframe\u003e",
                "title":"Metallica - Nothing Else Matters [Official Music Video]",
                "author_url":"https:\/\/www.youtube.com\/user\/MetallicaTV",
                "provider_name":"YouTube",
                "width":459,
                "thumbnail_url":"https:\/\/i.ytimg.com\/vi\/tAGnKpE4NCI\/hqdefault.jpg",
                "version":"1.0",
                "thumbnail_height":360,
                "provider_url":"https:\/\/www.youtube.com\/"
             }
        },
        {
            id: 4,
            current_seconds: -1,
            subscriber: 'Gilad',
            url: 'https://www.youtube.com/watch?v=g_khvMOruxg',
            meta: {  
                "title":"\u05d1\u05e8\u05d9 \u05e1\u05d7\u05e8\u05d5\u05e3 - \u05d7\u05d1\u05dc \u05e9\u05d0\u05ea \u05dc\u05d0",
                "author_name":"\u05d1\u05e8\u05d9 \u05e1\u05d7\u05e8\u05d5\u05e3 - Berry Sakharof",
                "html":"\u003ciframe width=\"459\" height=\"344\" src=\"https:\/\/www.youtube.com\/embed\/g_khvMOruxg?feature=oembed\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen\u003e\u003c\/iframe\u003e",
                "height":344,
                "provider_name":"YouTube",
                "type":"video",
                "thumbnail_height":360,
                "provider_url":"https:\/\/www.youtube.com\/",
                "thumbnail_url":"https:\/\/i.ytimg.com\/vi\/g_khvMOruxg\/hqdefault.jpg",
                "width":459,
                "thumbnail_width":480,
                "author_url":"https:\/\/www.youtube.com\/user\/sakharofficial",
                "version":"1.0"
             }
        },
        {
            id: 5,
            current_seconds: -1,
            subscriber: 'Coco',
            url: 'https://www.youtube.com/watch?v=k85mRPqvMbE',
            meta: {  
                "thumbnail_url":"https:\/\/i.ytimg.com\/vi\/k85mRPqvMbE\/hqdefault.jpg",
                "type":"video",
                "version":"1.0",
                "provider_url":"https:\/\/www.youtube.com\/",
                "author_name":"CrazyFrogVEVO",
                "height":270,
                "thumbnail_height":360,
                "provider_name":"YouTube",
                "title":"Crazy Frog - Axel F",
                "author_url":"https:\/\/www.youtube.com\/user\/CrazyFrogVEVO",
                "width":480,
                "html":"\u003ciframe width=\"480\" height=\"270\" src=\"https:\/\/www.youtube.com\/embed\/k85mRPqvMbE?feature=oembed\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen\u003e\u003c\/iframe\u003e",
                "thumbnail_width":480
             }
        },
        {
            id: 6,
            current_seconds: -1,
            subscriber: 'Udi',
            url: 'https://www.youtube.com/watch?v=Gi0DlP6HCj4',
            meta: {  
                "author_name":"\u05de\u05e9\u05d9\u05d7 \u05d5\u05d7\u05d1\u05e8\u05d9\u05dd",
                "height":270,
                "author_url":"https:\/\/www.youtube.com\/user\/BigFatOProductions",
                "thumbnail_url":"https:\/\/i.ytimg.com\/vi\/Gi0DlP6HCj4\/hqdefault.jpg",
                "html":"\u003ciframe width=\"480\" height=\"270\" src=\"https:\/\/www.youtube.com\/embed\/Gi0DlP6HCj4?feature=oembed\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen\u003e\u003c\/iframe\u003e",
                "thumbnail_width":480,
                "type":"video",
                "provider_name":"YouTube",
                "title":"\u05de\u05e9\u05d9\u05d7 - \u05de\u05e2\u05d1\u05e8 \u05dc\u05e9\u05d9\u05d0",
                "thumbnail_height":360,
                "width":480,
                "version":"1.0",
                "provider_url":"https:\/\/www.youtube.com\/"
             }
        },
        {
            id: 7,
            current_seconds: -1,
            subscriber: 'Gidon',
            url: 'https://www.youtube.com/watch?v=lwiK0ESU9qc',
            meta: {  
                "title":"Gamar Badawi - laroz desert groove",
                "html":"\u003ciframe width=\"480\" height=\"270\" src=\"https:\/\/www.youtube.com\/embed\/lwiK0ESU9qc?feature=oembed\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen\u003e\u003c\/iframe\u003e",
                "provider_name":"YouTube",
                "thumbnail_height":360,
                "author_url":"https:\/\/www.youtube.com\/user\/larozmusic",
                "width":480,
                "type":"video",
                "provider_url":"https:\/\/www.youtube.com\/",
                "height":270,
                "author_name":"Laroz Camel Rider \/ Laroz Music",
                "version":"1.0",
                "thumbnail_url":"https:\/\/i.ytimg.com\/vi\/lwiK0ESU9qc\/hqdefault.jpg",
                "thumbnail_width":480
             }
        }
    ])
}

export function getItemMeta(itemData) {
    const url = `https://www.youtube.com/oembed?url=${encodeURIComponent(itemData.url)}&format=json`;
    return fetch(url)
    .then(res => res.json())
    .then(res => {
        console.log(res);
    })
}

export function addItem(data) {
    console.log('add', data)
    return Promise.resolve({
        current_seconds: 20,
        subscriber: Auth.getUserDetails().name,
        url: data.url,
    })
} 