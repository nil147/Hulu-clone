import { useRouter } from 'next/router'


function HeaderItem({ title, Icon, href }) {
    

    const router = useRouter();




    const link = () => {
        if (href) {
            router.push(`${href}`)
        } else {
            router.push(`/`)
        }
        
    }



    return (
        <div onClick={link} className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
            <Icon className="h-8 mb-1 group-hover:animate-bounce" />
            <p className="opacity-0 group-hover:opacity-100 tracking-wide">{title}</p>
        </div>
    )
}

export default HeaderItem
