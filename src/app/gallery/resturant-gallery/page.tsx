import Gallery from '@/components/Gallery/Gallery'
import React from 'react'

export default function page() {
    const galleryData = [
        "/img/gallery/resturant/1.jpg",
        "/img/gallery/resturant/2.jpg",
        "/img/gallery/resturant/3.jpg",
        "/img/gallery/resturant/4.jpg",
        "/img/gallery/resturant/5.jpg",
        "/img/gallery/resturant/6.jpg",
        "/img/gallery/resturant/7.jpg",
        "/img/gallery/resturant/8.jpg",
    ]
    return (
        <>
            <section className="banner-header valign bg-img bg-fixed" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            {/* <div className="subtitle">Hotel Pradeep</div> */}
                            <div className="title">Resturant Gallery</div>
                        </div>
                    </div>
                </div>
            </section>

            <Gallery imageData={galleryData} title='Gallery' />

        </>
    )
}
