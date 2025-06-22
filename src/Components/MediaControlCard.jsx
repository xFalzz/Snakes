import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';

// Import audio files directly to get the correct URL from Vite
import apaMungkinAudio from '/src/Music/Bernadya - Apa Mungkin (Official Music Video).mp3';
import evaluasiAudio from '/src/Music/Evaluasi.mp3';
import resahJadiLukaAudio from '/src/Music/Resah Jadi Luka.mp3';

const MediaControlCard = () => {
  const theme = useTheme();
  const [currentSongIndex, setCurrentSongIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const songs = [
    {
      title: "Apa Mungkin",
      artist: "Bernadya",
      audio: apaMungkinAudio,
      cover: "/images/Apa Mungkin.jpeg",
    },
    {
      title: "Evaluasi",
      artist: "Hindia",
      audio: evaluasiAudio,
      cover: "/images/Evaluasi.jpg",
    },
    {
      title: "Resah Jadi Luka",
      artist: "Daun Jatuh",
      audio: resahJadiLukaAudio,
      cover: "/images/Resah Jadi Luka.jpg",
    },
  ];

  const audioRef = React.useRef(null);

  // Effect to handle the actual play/pause logic
  React.useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(e => {
        // If autoplay is blocked by the browser, reset the state.
        console.error("Play failed:", e);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Effect to load a new song when the index changes
  React.useEffect(() => {
    audioRef.current.src = songs[currentSongIndex].audio;
    // If a song was already playing, continue playing the new one
    if (isPlaying) {
      audioRef.current.play().catch(e => setIsPlaying(false));
    }
  }, [currentSongIndex]);

  const togglePlayPause = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex(prevIndex => (prevIndex + 1) % songs.length);
  };

  const previousSong = () => {
    setCurrentSongIndex(prevIndex => (prevIndex - 1 + songs.length) % songs.length);
  };

  return (
    <Card sx={{ display: 'flex' }} className='z-10' id='CardMedia'>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={songs[currentSongIndex].cover}
        alt="Music Cover" 
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }} >
        <CardContent sx={{ flex: '1 0 auto', pb: '0vh', pt: 1.2 }}>
          <Typography component="div" variant="" id='TitleSong'>
            {songs[currentSongIndex].title}
          </Typography>
          <Typography variant="subtitle1" component="div" id='ArtistSong'>
            {songs[currentSongIndex].artist}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous" onClick={previousSong} color="inherit">
            <SkipPreviousIcon />
          </IconButton>
          <IconButton aria-label="play/pause" onClick={togglePlayPause} color="inherit">
            {isPlaying ? (
              <PauseIcon sx={{ height: 38, width: 38 }} />
            ) : (
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            )}
          </IconButton>
          <IconButton aria-label="next" onClick={nextSong}  color="inherit">
            <SkipNextIcon />
          </IconButton>
        </Box>
      </Box>
      <audio
        ref={audioRef}
        onEnded={nextSong}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </Card>
  );
};

export default MediaControlCard;