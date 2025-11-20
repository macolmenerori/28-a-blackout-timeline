import React, { useEffect, useRef, useState } from 'react';

import { AccessTime, Edit, FlashOn, QueryStats, Warning } from '@mui/icons-material';
import {
  alpha,
  Box,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme
} from '@mui/material';

import styles from './Timeline.module.css';

import { EventType } from '@/types/event';

interface TimelineProps {
  events: EventType[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const theme = useTheme();
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set(prev).add(index));
            }
          },
          {
            threshold: 0.2,
            rootMargin: '-50px 0px'
          }
        );
        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [events]);

  const getEventIcon = (eventText: string): React.ReactNode => {
    if (eventText.includes('Total')) {
      return <Warning fontSize="small" sx={{ color: 'error.main' }} />;
    }
    if (eventText.includes('Hz')) {
      return <QueryStats fontSize="small" sx={{ color: 'text.secondary' }} />;
    }
    if (eventText.includes('MW')) {
      return <FlashOn fontSize="small" sx={{ color: 'warning.main' }} />;
    }
    return <Edit fontSize="small" sx={{ color: 'text.secondary' }} />;
  };

  return (
    <Box className={styles.timelineContainer}>
      {/* Timeline line */}
      <Box
        className={styles.timelineLine}
        sx={{
          backgroundColor: alpha(theme.palette.primary.main, 0.2),
          '&::before': {
            backgroundColor: theme.palette.primary.main
          },
          '&::after': {
            backgroundColor: theme.palette.primary.main
          }
        }}
      />

      {events.map((event, index) => (
        <div
          key={index}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          className={`${styles.timelineItem} ${
            index % 2 === 0 ? styles.left : styles.right
          } ${visibleItems.has(index) ? styles.visible : ''}`}
        >
          {/* Timeline dot */}
          <Box
            className={styles.timelineDot}
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderColor: theme.palette.error.main
            }}
          >
            <FlashOn
              sx={{
                color: 'error.main',
                fontSize: '1.2rem'
              }}
            />
          </Box>

          {/* Content card */}
          <Card
            className={styles.eventCard}
            elevation={visibleItems.has(index) ? 6 : 2}
            sx={{
              transition: 'all 0.3s ease',
              borderLeft: `4px solid ${theme.palette.error.main}`
            }}
          >
            <CardContent>
              {/* Time chip */}
              <Box className={styles.timeHeader}>
                <Chip
                  icon={<AccessTime />}
                  label={event.startTime}
                  color="error"
                  size="small"
                  sx={{
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    fontSize: '0.9rem'
                  }}
                />
              </Box>

              {/* Event title */}
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  mt: 1
                }}
              >
                {event.title}
              </Typography>

              {/* Events list */}
              <List dense className={styles.eventsList}>
                {event.events.map((item, itemIndex) => (
                  <ListItem
                    key={itemIndex}
                    className={styles.eventItem}
                    sx={{
                      py: 0.5,
                      px: 0,
                      opacity: visibleItems.has(index) ? 1 : 0,
                      animation: visibleItems.has(index)
                        ? `${styles.slideIn} 0.3s ease forwards`
                        : 'none',
                      animationDelay: `${itemIndex * 0.05}s`
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 30 }}>{getEventIcon(item)}</ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.text.primary,
                            fontWeight: item.includes('Total') ? 600 : 400
                          }}
                        >
                          {item}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>

              {/* Date footer */}
              <Typography
                variant="caption"
                sx={{
                  color: 'text.secondary',
                  display: 'block',
                  mt: 1,
                  textAlign: 'right'
                }}
              >
                {event.date}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}

      {/* Timeline end marker */}
      <Box className={styles.timelineEnd}>
        <Typography
          variant="caption"
          sx={{
            color: 'text.secondary',
            backgroundColor: 'background.paper',
            px: 2,
            py: 0.5,
            borderRadius: 1,
            border: `1px solid ${alpha(theme.palette.divider, 0.2)}`
          }}
        >
          Fin del registro de eventos
        </Typography>
      </Box>
    </Box>
  );
};

export default Timeline;
