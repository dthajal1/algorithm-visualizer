import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/system";

function App() {
  return (
    <Grid container justifyContent='center' alignItems='center' height='90vh'>
      <Stack spacing={2}>
        <Button variant="contained" color="secondary" href="https://path-finder101.netlify.app/">
          Graph Algorithm Visualier
        </Button>
        <Button variant="contained" color="secondary" href="https://comparison-sort-visualizer.netlify.app/">
          Sorting Algorithm Visualier
        </Button>
      </Stack>
    </Grid>
  );
}

export default App;
