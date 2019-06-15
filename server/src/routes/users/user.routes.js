/**
 * All database request will be manage in here
 */

import getSingleUser from "./get.user.route";
import getAllUser from "./get.users.route";
import { registerUser, loginUser } from "./post.user.route";
import deleteUser from "./put.user.route";

export { getSingleUser, getAllUser, registerUser, loginUser, deleteUser };
