const Details = (props) => {
    return (
        <div id="detailsCont">
            <div id="detailHeading">
                <h2>
                    <b>

                        {props.heading}
                    </b>
                </h2>
            </div>
            {props?.paragraph && (
                <div id="detailpara">
                    <div class="paraCont">
                        {props.paragraph}
                    </div>
                </div>
            )}



        </div>

    );
}
export default Details;