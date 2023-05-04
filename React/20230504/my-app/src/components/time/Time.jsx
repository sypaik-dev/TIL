import './Time.css'

function Time() {
    const name = "수염!";
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getMinutes();

    return (
        <div className = "wrap">
    <h1>안녕, {name} </h1>
    <h1 className="second">안녕, {name} 2번째다 우히히</h1>
    <ul>
        <li className = "year">
            년 : {year}
        </li>
        <li>
            월/일 : {month}/{date}
        </li>
        <li>
            시간 : {hour}시{min}분{sec}초
        </li>
    </ul>
    </div>
    )
}

export default Time