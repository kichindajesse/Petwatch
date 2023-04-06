import React from 'react';
import { Container, Typography, Card, CardContent } from '@material-ui/core';

function PetCatalog() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Pet Catalog: Dog Care and Treatment
      </Typography>
      <Card variant="outlined" style={{ marginTop: '1rem' }}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Basic Dog Care
          </Typography>
          <Typography variant="body1">
            Dogs require regular care to stay healthy and happy. This includes providing them with fresh water, nutritious
            food, regular exercise, and mental stimulation through play and training. It's important to keep their living
            environment clean and provide them with a comfortable shelter. Regular grooming, such as brushing their coat
            and trimming their nails, is also important for their hygiene and overall well-being.
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" style={{ marginTop: '1rem' }}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Vaccinations and Preventive Care
          </Typography>
          <Typography variant="body1">
            Dogs require vaccinations to protect them from common diseases. Regular visits to the veterinarian for
            check-ups and vaccinations are essential for their health. Preventive care measures such as flea and tick
            control, heartworm prevention, and dental care are also important to keep dogs healthy and prevent common
            health issues.
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" style={{ marginTop: '1rem' }}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Emergency Care
          </Typography>
          <Typography variant="body1">
            It's important to be prepared for emergencies with your dog. This includes having a first aid kit for pets
            on hand, knowing the location of the nearest emergency veterinarian, and being aware of common signs of
            illness or distress in your dog. Quick action and proper care in case of emergencies can save your dog's
            life.
          </Typography>
        </CardContent>
      </Card>
      <Card variant="outlined" style={{ marginTop: '1rem' }}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Training and Behavior
          </Typography>
          <Typography variant="body1">
            Proper training and socialization are important for a well-behaved and happy dog. Basic obedience training,
            house training, and socialization with other dogs and people can help prevent behavior problems and ensure
            that your dog is well-behaved in various situations. Positive reinforcement techniques, patience, and
            consistency are key to successful dog training.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default PetCatalog;

