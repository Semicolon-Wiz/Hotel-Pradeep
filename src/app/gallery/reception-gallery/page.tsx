import Gallery from '@/components/Gallery/Gallery'
import React from 'react'

export default function page() {
    const galleryData = [
        "/img/gallery/reception/1.jpg",
        "/img/gallery/reception/2.jpg",
        "/img/gallery/reception/3.jpg",
        "/img/gallery/reception/4.jpg",
        "/img/gallery/reception/5.jpg",
    ]
    return (
        <>
            <section className="banner-header valign bg-img bg-fixed" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            {/* <div className="subtitle">Hotel Pradeep</div> */}
                            <div className="title">Reception Gallery</div>
                        </div>
                    </div>
                </div>
            </section>

            <Gallery imageData={galleryData} title='Gallery' />

        </>
    )
}
