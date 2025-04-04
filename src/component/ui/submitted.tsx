
function Submit({setTick} : any) {
    return (
        <div className="p-3  flex flex-col justify-center border border-green-500 rounded-xl w-[600px] h-[300px] bg-white">
            <div className="flex justify-center">
                <div className="flex flex-col gap-2">
                    <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZHVjc3VwcG10NjNwbHR4M2c3bmw5cmhodTZkbHhwNXBybGFkZm1sbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tf9jjMcO77YzV4YPwE/giphy.gif"
                        className="w-35 h-35 ml-4"
                        alt="" />
                    <div className="mt-3 font-bold">Successfully Submitted!</div>
                </div>
            </div>
        </div>
    )
}

export default Submit
