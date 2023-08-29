import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard/index";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import FormPage from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQPage from "./scenes/faq";
import BarPage from "./scenes/bar";
import PiePage from "./scenes/pie";

import { Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import LinePage from "./scenes/line";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />

          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQPage />} />
               <Route path="/bar" element={<BarPage />} />
              <Route path="/pie" element={<PiePage />} />
               <Route path="/line" element={<LinePage />} />
              {/*<Route path="/geography" element={<Geography />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
