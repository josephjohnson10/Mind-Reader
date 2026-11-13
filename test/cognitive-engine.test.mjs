// Mind-Reader Cognitive Engine & Risk Analysis Unit Test Suite
import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { calculateGrade, analyzePerformance } from '../src/engine/GameEngine.js';

describe('Cognitive Engine - Grading System', () => {
  it('correctly assigns S grade for scores >= 95%', () => {
    assert.equal(calculateGrade(96, 100), 'S');
    assert.equal(calculateGrade(95, 100), 'S');
  });

  it('correctly assigns A grade for scores 90-94%', () => {
    assert.equal(calculateGrade(90, 100), 'A');
    assert.equal(calculateGrade(94, 100), 'A');
  });

  it('correctly assigns B grade for scores 80-89%', () => {
    assert.equal(calculateGrade(80, 100), 'B');
    assert.equal(calculateGrade(89, 100), 'B');
  });

  it('correctly assigns C grade for scores 70-79%', () => {
    assert.equal(calculateGrade(70, 100), 'C');
    assert.equal(calculateGrade(75, 100), 'C');
  });

  it('correctly assigns D grade for scores 60-69%', () => {
    assert.equal(calculateGrade(60, 100), 'D');
    assert.equal(calculateGrade(69, 100), 'D');
  });

  it('correctly assigns F grade for scores < 60%', () => {
    assert.equal(calculateGrade(59, 100), 'F');
    assert.equal(calculateGrade(20, 100), 'F');
  });
});

describe('Cognitive Engine - Learning Difference Risk Analysis', () => {
  describe('Lexical Legends (Dyslexia Analysis)', () => {
    it('detects high Dyslexia risk when letter confusion rate is significant', () => {
      const metrics = { correct: 4, incorrect: 6, missed: 0, speed: 2.5 };
      const analysis = analyzePerformance('lexical-legends', metrics, 12);
      assert.equal(analysis.riskLevel, 'High');
      assert.ok(analysis.feedback.includes('Dyslexia'));
    });

    it('detects low Dyslexia risk for high accuracy reading', () => {
      const metrics = { correct: 18, incorrect: 1, missed: 1, speed: 1.2 };
      const analysis = analyzePerformance('lexical-legends', metrics, 12);
      assert.equal(analysis.riskLevel, 'Low');
      assert.ok(analysis.feedback.includes('Strong lexical'));
    });
  });

  describe('Number Ninja (Dyscalculia Analysis)', () => {
    it('detects high Dyscalculia risk when math accuracy is under 60%', () => {
      const metrics = { correct: 4, incorrect: 6, speed: 4.0 };
      const analysis = analyzePerformance('number-ninja', metrics, 12);
      assert.equal(analysis.riskLevel, 'High');
      assert.ok(analysis.feedback.includes('Dyscalculia'));
    });

    it('detects low Dyscalculia risk when calculations are accurate', () => {
      const metrics = { correct: 15, incorrect: 1, speed: 2.1 };
      const analysis = analyzePerformance('number-ninja', metrics, 12);
      assert.equal(analysis.riskLevel, 'Low');
      assert.ok(analysis.feedback.includes('Strong numerical'));
    });
  });

  describe('Focus Flight (ADHD & Attention Analysis)', () => {
    it('detects moderate attention lapses when crashes exceed collection', () => {
      const metrics = { collected: 3, crashes: 7 };
      const analysis = analyzePerformance('focus-flight', metrics, 12);
      assert.equal(analysis.riskLevel, 'Moderate');
      assert.ok(analysis.feedback.includes('Attention lapses'));
    });

    it('detects good sustained attention when obstacle avoidance is maintained', () => {
      const metrics = { collected: 15, crashes: 2 };
      const analysis = analyzePerformance('focus-flight', metrics, 12);
      assert.equal(analysis.riskLevel, 'Low');
      assert.ok(analysis.feedback.includes('Good sustained attention'));
    });
  });

  describe('Spatial Recall (Dysgraphia & Visual-Spatial Memory)', () => {
    it('detects visual memory deficit indicators when maxLevel < 3', () => {
      const metrics = { correct: 2, maxLevel: 2 };
      const analysis = analyzePerformance('spatial-recall', metrics, 12);
      assert.equal(analysis.riskLevel, 'High');
      assert.ok(analysis.feedback.includes('deficit indicators'));
    });

    it('detects strong recall when maxLevel >= 3', () => {
      const metrics = { correct: 8, maxLevel: 5 };
      const analysis = analyzePerformance('spatial-recall', metrics, 12);
      assert.equal(analysis.riskLevel, 'Low');
      assert.ok(analysis.feedback.includes('Strong visual-spatial'));
    });
  });

  describe('Matrix Reasoning (Pattern Recognition)', () => {
    it('identifies superior non-verbal reasoning for accuracy > 80%', () => {
      const metrics = { correct: 9, incorrect: 1 };
      const analysis = analyzePerformance('matrix-reasoning', metrics, 12);
      assert.equal(analysis.riskLevel, 'Low');
      assert.ok(analysis.feedback.includes('Superior'));
    });

    it('flags difficulty with abstract patterns when accuracy is lower', () => {
      const metrics = { correct: 3, incorrect: 5 };
      const analysis = analyzePerformance('matrix-reasoning', metrics, 12);
      assert.equal(analysis.riskLevel, 'Moderate');
      assert.ok(analysis.feedback.includes('Difficulty'));
    });
  });
});
