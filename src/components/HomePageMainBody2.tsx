import { Divider, Stack } from "@mui/material";
import { services } from "../data/globalData";
import CategoryCard from "./CategoryCard";

function HomePageMainBody2() {
    return (
        <Stack
            direction="column"
            spacing={4}
        >
            {services.map((service) => (
                <>
                    <CategoryCard categoryName={service.categoryName} items={service.items} />
                    <Divider/>
                </>
            ))}
        </Stack>
    )
}

export default HomePageMainBody2;