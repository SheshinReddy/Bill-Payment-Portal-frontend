import { Divider, Stack } from "@mui/material";
import { allServices } from "../../data/globalData";
import CategoryCard from "./CategoryCard";
import "./HomePageMainBody.css";

function HomePageMainBody() {
  return (
    <Stack direction="column" spacing={4}>
      {allServices.map((category, index) => (
        <div key={index}>
          <CategoryCard
            categoryName={category.categoryName}
            categoryServices={category.categoryServices}
          />
          <Divider className="divider" />
        </div>
      ))}
    </Stack>
  );
}

export default HomePageMainBody;
