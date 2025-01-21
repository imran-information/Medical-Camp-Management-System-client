import React, { useState } from "react";
import { TextField, Button, Box, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearchClick = () => {
        onSearch(query);
    };
    return (
        <Box className="md:w-1/3 pl-10" display="flex" mb={2}>
            <TextField
                variant="outlined"
                size="small"
                placeholder="Search..."
                value={query}
                onChange={(e) => { onSearch(e.target.value), setQuery(e.target.value) }}
                fullWidth
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleSearchClick}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>



    );
};

export default SearchBar;
