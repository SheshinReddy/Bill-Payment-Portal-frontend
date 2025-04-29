import { useState, useEffect, useRef } from 'react';
import { Button, Snackbar } from '@mui/material';

interface PlaySoundButtonProps {
  audioSrc: string;
  label?: string;
}

function PlaySoundButton({ audioSrc, label = "Test Sound" }: PlaySoundButtonProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio(audioSrc);
    audioRef.current.preload = "auto";

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc]);

  const handlePlaySound = async () => {
    if (!audioRef.current) {
      setSnackbarMessage('Audio not initialized');
      setShowSnackbar(true);
      return;
    }

    try {
      // Reset the audio to the beginning if it was played before
      audioRef.current.currentTime = 0;
      await audioRef.current.play();
      setSnackbarMessage('Playing sound');
      setShowSnackbar(true);
    } catch (error) {
      console.error('Failed to play audio:', error);
      setSnackbarMessage('Failed to play sound. Check console for details.');
      setShowSnackbar(true);
    }
  };

  return (
    <>
      <Button 
        variant="outlined" 
        onClick={handlePlaySound}
        sx={{
          borderColor: '#51508B',
          color: '#51508B',
          '&:hover': {
            borderColor: '#444479',
            backgroundColor: 'rgba(81, 80, 139, 0.04)',
          }
        }}
      >
        {label}
      </Button>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={() => setShowSnackbar(false)}
        message={snackbarMessage}
      />
    </>
  );
}

export default PlaySoundButton;