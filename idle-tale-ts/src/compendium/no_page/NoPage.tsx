function NoPage() {

    return (
        <div className="App">
            <h2>No Page Here :(</h2>
            <div style={{
                width: "250px",
                height: "250px",
                backgroundRepeat: "no-repeat",
				backgroundImage: "url(./resources/cedric_crying.png)",
				backgroundPosition: "center",
				backgroundSize: "100%",
			}}>
            </div>
        </div>
    );

}
  
export default NoPage;