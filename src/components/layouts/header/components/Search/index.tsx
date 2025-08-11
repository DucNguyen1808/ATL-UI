'use client'

import * as React from 'react'
import { Box, IconButton, TextField, Fade } from '@mui/material'
import { IoIosSearch } from 'react-icons/io'

export default function Search() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Box sx={{ position: 'relative' }}>
      <IconButton
        onClick={handleToggle}
        sx={{
          color: 'rgba(255, 255, 255, 0.9)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          padding: '8px',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: '#fff',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <IoIosSearch />
      </IconButton>

      <Fade in={isOpen}>
        <Box
          sx={{
            position: 'absolute',
            top: '100%',
            right: 0,
            mt: 3,
            zIndex: 10,
            minWidth: 300,
          }}
        >
          <TextField
            fullWidth
            placeholder="Tìm kiếm..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            variant="outlined"
            size="small"
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.4)',
              backdropFilter: 'blur(10px)',
              color: 'white',
              borderRadius: '12px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                color: 'white',
                '& fieldset': {
                  border: 'none',
                },
                '&:hover fieldset': {
                  border: 'none',
                },
                '&.Mui-focused fieldset': {
                  border: 'none',
                },
              },
              '& .MuiInputBase-input::placeholder': {
                color: 'white',
                opacity: 1,
              },
            }}
            InputProps={{
              startAdornment: (
                <Box sx={{ color: 'rgba(255, 255, 255, 0.9)', mr: 1, display: 'flex' }}>
                  <IoIosSearch />
                </Box>
              ),
            }}
            autoFocus
          />
        </Box>
      </Fade>
    </Box>
  )
}
