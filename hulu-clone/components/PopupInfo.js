import Image from "next/image"

function PopupInfo({image, overview, title, isOpen}) {
    return (
        <div>
            {isOpen ? (
                <div className="">
                    <Image
                    height={400}
                    width={400}
                    src={image} />
                    <h1>
                        hey
                    </h1>
                </div>
            ) : (
                <div className="">
                    <h1>
                        No Results
                    </h1>
                </div>
            )}
        </div>
    )
}

export default PopupInfo
