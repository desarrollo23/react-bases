
function MyAwesomeApp() {

    const firstName = 'Andres';
    const lastName = 'Duarte';

    const arr = ['Iron man', 'Hulk', 'Thor'];

    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p
                style={{
                    backgroundColor: 'red'
                }}>
                {arr.join(' | ')}
            </p>
        </>
    )
}

export default MyAwesomeApp