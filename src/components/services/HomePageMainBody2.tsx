import { Divider, Stack } from "@mui/material";
import { services } from "../../data/globalData";
import CategoryCard from "./CategoryCard";
import "../styles/HomePageMainBody2.css"

function HomePageMainBody2() {
    return (
        <Stack
            direction="column"
            spacing={4}
        >
            {services.map((service) => (
                <>
                    <CategoryCard categoryName={service.categoryName} items={service.items} />
                    {/* {index!== services.length-1 && <Divider/>} */}
                    <Divider className = "divider"/>
                </>
            ))}
        </Stack>
    )
}

export default HomePageMainBody2;