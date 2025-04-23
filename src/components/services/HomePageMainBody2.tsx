import { Divider, Stack } from "@mui/material";
import { services } from "../../data/globalData";
import CategoryCard from "./CategoryCard";
import "./HomePageMainBody2.css";

function HomePageMainBody2() {
  return (
    <Stack direction="column" spacing={4}>
      {services.map((service, index) => (
        <div key={index}>
          <CategoryCard
            categoryName={service.categoryName}
            items={service.items}
          />
          <Divider className="divider" />
        </div>
      ))}
    </Stack>
  );
}

export default HomePageMainBody2;
