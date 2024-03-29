import { Route, Switch } from "react-router-dom";
import Form from "./Form";
import List from "./List";

const Products = () => {
    return(
        <Switch>
            <Route path="/admin/students" exact>
                <List/>
            </Route>
            <Route path="/admin/students/:studentId">
                <Form/>
            </Route>
        </Switch>
    );
}

export default Products;