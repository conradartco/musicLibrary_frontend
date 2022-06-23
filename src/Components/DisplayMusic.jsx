import './Components.css'

const DisplayMusic = (props) => {

    return (
        <table className='table-class'>
            <thead>
                <tr>
                    <th className='col-1'>Title</th>
                    <th className='col-2'>Artist</th>
                    <th className='col-3'>Album</th>
                    <th className='col-4'>Genre</th>
                    <th className='col-5'>Release Date</th>
                    <th className='col-6'></th>
                    <th className='col-7'></th>
                </tr>
            </thead>
            <tbody>
                {props.musicData.map((entry, index) => {
                    return (
                        <tr key={index} className='row-style'>
                            <td className='col-1'>{entry.title}</td>
                            <td className='col-2'>{entry.artist}</td>
                            <td className='col-3'>{entry.album}</td>
                            <td className='col-4'>{entry.genre}</td>
                            <td className='col-5'>{entry.release_date}</td>
                            <td className='col-6'><i className="fa-solid fa-pen-to-square fa-lg"></i></td>
                            <td className='col-7'><i className="fa-solid fa-circle-minus fa-lg"></i></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

export default DisplayMusic;