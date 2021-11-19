import React, { useState, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Grow from '@mui/material/Grow';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';

const TogglePlay = audio => {
    const [playing, setPlaying] = useState(false);

    const toggle = () => {
        setPlaying(!playing);
        console.log("toggle cclicked: ", playing)
    }


    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener("ended", () => setPlaying(false));
        return () => {
            audio.removeEventListener("ended", () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

const Player = (props) => {
    const [audio] = useState(new Audio(props.audio));
    const [playing, toggle] = TogglePlay(audio)
    const [duration, setDuration] = useState(0);
    const [position, setCurrentTime] = useState(0);

    audio.addEventListener("loadedmetadata", () => {
        // console.log("duration:", audio.duration);
        setDuration(audio.duration);

        // console.log("current time", audio.currentTime);
        setCurrentTime(audio.currentTime);
    });
    useEffect(() => {

        const time = setInterval(() => {

            setDuration(duration => (audio.duration - audio.currentTime).toFixed(0))
            setCurrentTime(() => audio.currentTime.toFixed(0))
        }, 1000);

        return () => clearInterval(time);
    },
        []
    );


    // const [durationAudio] = useState(new Audio(props.audio))
    // const [duration, setDuration] = useState(0);

    const theme = useTheme();

    // const [position, setPosition] = React.useState(0);

    const Widget = styled('div')(({ theme }) => ({
        padding: 16,
        borderRadius: 16,
        width: 343,
        maxWidth: '100%',
        margin: 'auto',
        position: 'relative',
        zIndex: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.4)',
        backdropFilter: 'blur(40px)',
    }));

    const CoverImage = styled('div')({
        width: 100,
        height: 100,
        objectFit: 'cover',
        overflow: 'hidden',
        flexShrink: 0,
        borderRadius: 8,
        backgroundColor: 'rgba(0,0,0,0.08)',
        '& > img': {
            width: '100%',
        },
    });

    const TinyText = styled(Typography)({
        fontSize: "0.75rem",
        opacity: 0.38,
        fontWeight: 500,
        letterSpacing: 0.2,
    });



    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft.toFixed(0)}`;
    }
    const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';

    let loading2 = false;
    if (isNaN(audio.duration) || isNaN(position)) {
        loading2 = true;
    }

    if (loading2) {
        return (
            <Box flexGrow={1} sx={{ bgcolor: "#f0eeeb", height: "100vh" }}>
                <Typography
                    variant="h2"
                    component="div"
                    align="center"
                    pt={20}
                    sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
                >
                    LOADING...
                </Typography>
            </Box>
        );
    }

    // console.log("audio time: ", audio.currentTime);

    return (
        <Box flexGrow={1}>
            <Widget>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CoverImage>
                        <img
                            alt="podcast cover art"
                            src={props.image}
                        />
                    </CoverImage>
                    <Box sx={{ ml: 1.5, minWidth: 0 }}>
                        <Typography variant="caption" color="text.secondary" fontWeight={500}>
                            {props.podcastName}
                        </Typography>
                        <Typography noWrap>
                            <b>{props.title}</b>
                        </Typography>
                        <Typography noWrap letterSpacing={-0.25}>
                            Season - {props.seasonNum} Episode - {props.episodeNum}
                        </Typography>
                    </Box>
                </Box>
                <Slider
                    aria-label="time-indicator"
                    size="small"
                    value={position}
                    min={0}
                    step={1}
                    max={audio.duration}
                    onChangeCommitted={(_, value) => {
                        const newVal = value;
                        setDuration(duration => (audio.duration - newVal).toFixed(0));
                        audio.currentTime = newVal; setCurrentTime(newVal)
                    }}
                    sx={{
                        color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                        height: 4,
                        '& .MuiSlider-thumb': {
                            width: 8,
                            height: 8,
                            transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                            '&:before': {
                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                            },
                            '&:hover, &.Mui-focusVisible': {
                                boxShadow: `0px 0px 0px 8px ${theme.palette.mode === 'dark'
                                    ? 'rgb(255 255 255 / 16%)'
                                    : 'rgb(0 0 0 / 16%)'
                                    }`,
                            },
                            '&.Mui-active': {
                                width: 20,
                                height: 20,
                            },
                        },
                        '& .MuiSlider-rail': {
                            opacity: 0.28,
                        },
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mt: -2,
                    }}
                >
                    <TinyText>{formatDuration(position)}</TinyText>
                    <TinyText>-{formatDuration(duration)}</TinyText>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: -1,
                    }}
                >
                    <IconButton aria-label="previous song" onClick={(event) => {
                        event.preventDefault();
                        setDuration(duration => (audio.duration - 10).toFixed(0));
                        audio.currentTime = position - 10;
                        setCurrentTime(position - 10);
                    }}>
                        <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
                    </IconButton>
                    <IconButton
                        aria-label={playing ? 'pause' : 'play'}
                        onClick={(event) => { event.preventDefault(); toggle() }}
                    >
                        {!playing ? (
                            <PlayArrowRounded
                                sx={{ fontSize: '3rem' }}
                                htmlColor={mainIconColor}
                            />
                        ) : (
                            <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
                        )}
                    </IconButton>
                    <IconButton aria-label="next song" onClick={(event) => {
                        event.preventDefault();
                        setDuration(duration => (audio.duration + 10).toFixed(0));
                        audio.currentTime = audio.currentTime + 10;
                        setCurrentTime(audio.currentTime + 10)
                    }}>
                        <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
                    </IconButton>
                </Box>
            </Widget >
        </Box>
    )
}

export default Player;
