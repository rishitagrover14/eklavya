import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import "./index.css"
import { colleges, engineering, Medical,mockTransactions } from "../../data/mockData";
import { MedicalInformation } from "@mui/icons-material";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
   <div>
    <div className="opp">OPPOURTUNITY</div>
    <Box m="30px">
      {/* HEADER */}

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
        marginTop="-20px"
      >
       <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          marginBottom="50px"
          boxShadow="2px 2px 6px #6379a4e0"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            colors={colors.grey[100]}
            p="18px"
          >
            <Typography
              color={colors.greenAccent[600]}
              variant="h5"
              fontWeight="600"
              fontSize="22px"
            >
              Top Medical colleges
            </Typography>
          </Box>
          {Medical.map((med, i) => (
            <Box
              display="flex"
              justifyContent="space-between"
              // gap="25px"
              alignItems="center"
              p="18px"
            >
              <Box width="170px">
                <Typography>{med.name}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{med.entrance_test}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                view
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          marginBottom="50px"
          boxShadow="2px 2px 6px #6379a4e0"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            colors={colors.grey[100]}
            p="18px"
          >
            <Typography
              color={colors.greenAccent[600]}
              variant="h5"
              fontWeight="600"
              fontSize="22px"
            >
              Top Medical colleges
            </Typography>
          </Box>
          {Medical.map((med, i) => (
            <Box
              display="flex"
              justifyContent="space-between"
              // gap="25px"
              alignItems="center"
              p="15px"
            >
              <Box width="170px">
                <Typography>{med.name}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{med.entrance_test}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                view
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          overflow="auto"
          marginBottom="50px"
          objectFit="contain"
          boxShadow="2px 2px 6px #6379a4e0"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            colors={colors.grey[100]}
            p="18px"
          >
            <Typography
              color={colors.greenAccent[600]}
              variant="h5"
              fontWeight="600"
              fontSize="22px"
            >
              Top Law colleges
            </Typography>
          </Box>
          {colleges.map((college, i) => (
            <Box
              display="flex"
              justifyContent="space-between"
              // gap="25px"
              alignItems="center"
              p="18px"
            >
              <Box width="170px">
                <Typography>{college.name}</Typography>
              </Box>
              <Box color={colors.grey[100]}>{college.entrance_test}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                view
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
   </div>
  );
};

export default Dashboard;
