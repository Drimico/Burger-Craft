import { Route, Routes } from "react-router-dom";
import NavbarLayout from "./layouts/NavbarLayout";
import router from "./router";

function App() {
	return (
		<Routes>
			{router.map((route) => {
				return (
					<Route
						key={route.path}
						path={route.path}
						element={<NavbarLayout>{route.element}</NavbarLayout>}
					/>
				);
			})}
		</Routes>
	);
}

export default App;
