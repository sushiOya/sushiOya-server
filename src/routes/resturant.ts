import { Router } from "express";
import { createReview } from "../domains/restaurant/controllers/create-review";
import { getCheapLunchRestaurant } from "../domains/restaurant/controllers/get-cheap-lunch-restaurant";
import { getHighScoreRestaurant } from "../domains/restaurant/controllers/get-high-score-restaurant";
import { getRecentRestaurants } from "../domains/restaurant/controllers/get-recent-restaurants";
import { controllerHandler } from "../lib/controller-handler";
import { authJWT } from "../middleware/auth";

const restaurantRouter = Router();

// restaurantRouter.get("/test", (req, res) => {
//     res.json({ msg: "test" });
// });

restaurantRouter.get("/", controllerHandler(getRecentRestaurants));
restaurantRouter.get("/lunch", controllerHandler(getCheapLunchRestaurant));
restaurantRouter.get("/score", controllerHandler(getHighScoreRestaurant));
restaurantRouter.post("/:id/review", authJWT, controllerHandler(createReview));

export { restaurantRouter };
