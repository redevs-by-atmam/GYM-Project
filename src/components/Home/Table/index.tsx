import Image from "next/image";

interface table {
    index: number;
    name: string;
    timing: string;
    trainer: string;
    caloriesburned: number;
    action: string;
    imgSrc: string;
}

const tableData: table[] = [
    {
        index: 1,
        name: "Yoga Flow",
        imgSrc: '/images/table/yoga.svg',
        timing: "6:00 AM",
        trainer: "Trainer 1",
        caloriesburned: 200,
        action: "Join",
    },
    {
        index: 2,
        name: "Strength Training",
        imgSrc: '/images/table/strength.svg',
        timing: "7:30 AM",
        trainer: "Trainer 2",
        caloriesburned: 450,
        action: "Join",
    },
    {
        index: 3,
        name: "Spin Class",
        imgSrc: '/images/table/spinclass.svg',
        timing: "5:00 PM",
        trainer: "Trainer 3",
        caloriesburned: 350,
        action: "Full",
    },
    {
        index: 4,
        name: "HIIT Boxing",
        imgSrc: '/images/table/boxing.svg',
        timing: "8:00 PM",
        trainer: "Trainer 4",
        caloriesburned: 500,
        action: "Join",
    },
]

const Table = () => {
    return (
        <section>
            <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4' id="exchange-section">
                <div className="rounded-2xl bg-tablebg p-8 overflow-x-auto relative z-10">
                    <h3 className="text-white/80 text-2xl">Live Class Schedule</h3>
                    <table className="table-auto w-full mt-10">
                        <thead>
                            <tr className="text-white bg-border rounded-2xl">
                                <th className="px-4 py-4 font-normal rounded-s-lg">#</th>
                                <th className="px-4 py-4 text-start font-normal">CLASS NAME</th>
                                <th className="px-4 py-4 font-normal">TIMING</th>
                                <th className="px-4 py-4 font-normal">TRAINER</th>
                                <th className="px-4 py-4 font-normal">CALORIES BURNED</th>
                                <th className="px-4 py-4 font-normal rounded-e-lg">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((items, i) => (
                                <tr key={i} className="border-b border-b-border">
                                    <td className="px-4 py-6 text-center text-white">{items.index}</td>
                                    <td className="px-4 py-6 text-center text-white flex items-center justify-start gap-5 "><Image src={items.imgSrc} alt={items.imgSrc} height={50} width={50} />{items.name}</td>
                                    <td className="px-4 py-6 text-center text-white">{items.timing.toLocaleString()}</td>
                                    <td className="px-4 py-6 text-center text-primary">{items.trainer.toLocaleString()}</td>
                                    <td className="px-4 py-6 text-center text-white">-{items.caloriesburned.toLocaleString()}</td>
                                    <td className={`px-4 py-6 text-center ${items.action === 'Buy' ? 'text-secondary' : 'text-primary'}`}>
                                        {items.action}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Image src={'/images/Table/Untitled.svg'} alt="ellipse" width={2460} height={102} />
        </section>
    )
}

export default Table;
