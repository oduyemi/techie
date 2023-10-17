import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";



export const Contact = () => {
    return(
        <>
            <Box maxWidth="xl" className="contact-section section_padding">
                <Box className="container">
                <Box className="md:hidden sm:block mb-5 pb-4">
                    <Box sx={{ height:"480px"}} id="map">
                    {/* <script>
                    function initMap() {
                        var uluru = {
                        lat: -25.363,
                        lng: 131.044
                        };
                        var grayStyles = [{
                            featureType: "all",
                            stylers: [{
                                saturation: -90
                            },
                            {
                                lightness: 50
                            }
                            ]
                        },
                        {
                            elementType: 'labels.text.fill',
                            stylers: [{
                            color: '#ccdee9'
                            }]
                        }
                        ];
                        var map = new google.maps.Map(document.getElementById('map'), {
                        center: {
                            lat: -31.197,
                            lng: 150.744
                        },
                        zoom: 9,
                        styles: grayStyles,
                        scrollwheel: false
                        });
                    }
                    </script> */}
                    {/* <script
                    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&callback=initMap">
                    </script> */}

                    </Box>
                </Box></Box></Box>

        </>
    )
}