import { IoPersonAddOutline } from "react-icons/io5";
interface Typess {
    title: string,
    desc: string,
    setSelectedLead?: any,
    setLead?: any,
    setSelectedEmail?: any,
    setEmail?: any
}
function LeadBox({ title, desc, setSelectedLead, setLead, setSelectedEmail, setEmail }: Typess) {
    return (
        <div
            onClick={() => {
                if (setLead) {
                    setSelectedLead(true)
                    setLead(false)
                } else {
                    setSelectedEmail(true)
                    setEmail(false)
                }
            }}
            className="border border-neutral-200 px-4 py-5 w-[400px] mt-3 bg-white cursor-pointer hover:bg-neutral-200 transition-all duration-300 ease-in-out">
            <div className="flex gap-4">
                <div className="flex flex-col items-center justify-start">
                    <div className="p-5 bg-pink-200 w-[50px] rounded-xl border border-pink-500 h-[50px] flex justify-center items-center text-center"><IoPersonAddOutline /></div>

                </div>
                <div>
                    <p className="text-xl font-bold">{title}</p>
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default LeadBox
