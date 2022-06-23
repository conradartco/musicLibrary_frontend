// import './Components.css'
import './DisplayMusic.scss'

const DisplayMusic = (props) => {
    return ( 
        <div class="container">
            <h2>MUSIC LIBRARY</h2>
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="col col-1">Title</div>
                    <div class="col col-2">Artist</div>
                    <div class="col col-3">Album</div>
                    <div class="col col-4">Genre</div>
                    <div class="col col-5">Release</div>
                    <div class="col col-6"></div>
                    <div class="col col-7"></div>
                </li>
            </ul>
            <ul class="responsive-table">
                {props.musicData.map((entry, index) => {
                    return (
                        <li class="table-row">
                            <div class="col col-1" data-label="Job Id">42235</div>
                            <div class="col col-2" data-label="Customer Name">John Doe</div>
                            <div class="col col-3" data-label="Amount">$350</div>
                            <div class="col col-4" data-label="Payment Status">Pending</div>
                        </li>
                    );
                })}
            </ul>
            
        </div>
     );
}
 
export default DisplayMusic;

// const DisplayMusic = (props) => {

//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th>Track</th>
//                     <th>Title</th>
//                     <th>Artist</th>
//                     <th>Album</th>
//                     <th>Genre</th>
//                     <th>Release Date</th>
//                     <th></th>
//                     <th></th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {props.musicData.map((entry, index) => {
//                     return (
//                         <tr key={index}>
//                             <td>{index +1}</td>
//                             <td>{entry.title}</td>
//                             <td>{entry.artist}</td>
//                             <td>{entry.album}</td>
//                             <td>{entry.genre}</td>
//                             <td>{entry.release_date}</td>
//                             <td className='button-style'><i className="fa-solid fa-pen-circle fa-lg"></i></td>
//                             <td className='button-style'><i className="fa-solid fa-circle-minus fa-lg"></i></td>
//                         </tr>
//                     );
//                 })}
//             </tbody>
//         </table>
//     )
// }

// export default DisplayMusic;