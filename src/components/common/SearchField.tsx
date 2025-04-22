import { TextField } from "@mui/material";
import "../../styles/SearchField.css";
// import "src/styles/SearchField.css"

function SearchField() {
    return (
        <div
            className="search-bar-container"
        >
            <TextField
                className="search-bar"
                type="search"
                placeholder="Search for a Bill category"
                sx={{
                    minWidth: {
                        xs: "280px",
                        md: "350px",
                        lg: "450px",
                        xl: "500px"
                    },
                    marginTop: "32px"
                }}
                InputProps={{
                    startAdornment: (
                        <img
                            src="src\assets\search.svg"
                            style={{
                                width: "20px",
                                height: "20px",
                                padding: "0.5px 0"
                            }}
                        />
                    )
                }}
            />
        </div>
    )
}

export default SearchField;