import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  text: string;
  author: string;
  role: string;
  image: string;
  bgColor: string;     // Background for testimonial-container
}

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  testimonials: Testimonial[] = [
    {
      text: ` He figured a few sticks of dynamite were easier than a fishing pole to catch fish.`,
      author: '- Erik Lucatero',
      role: 'App Developer',
      image: '/assets/people/person1.avif',
      bgColor: '#f2ecfa'
    },
    {
      text: `It was difficult for Mary to admit that most of her workout consisted of exercising poor judgment.`,
      author: '- Maria Gomez',
      role: 'Project Manager',
      image: '/assets/people/person2.webp',
      bgColor: '#e0e4ff'
    },
    {
      text: `It took me too long to realize that the ceiling hadn't been painted to look like the sky.`,
      author: '- Daniel Brooks',
      role: 'UX Designer',
      image: '/assets/people/person3.jpeg',
      bgColor: '#e9f5e9'
    }
  ];

  currentIndex = 0;
  animate = false;
  dotSpacing = 26;

  setIndex(i: number) {
    this.animate = false;
    this.currentIndex = i;
  
    // Trigger fade animation
    setTimeout(() => (this.animate = true), 10);
  }
  
  onImageLoad() {
    this.animate = true;
  }
}
